import Layout from "@/components/Layout"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  BanknotesIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline"
import { PiCurrencyEth } from "react-icons/pi"
import { BsBricks } from "react-icons/bs"
import { useRouter } from "next/router"
import Select from "@/components/Select"
import api from "@/utils/api"
import Cookies from "cookies"
import Link from "next/link"

export const getServerSideProps = async ({ params, req, res }) => {
  const cookieStore = new Cookies(req, res)
  const cookie = cookieStore.get("Authorization")

  return {
    props: { params, cookie: cookie || null },
  }
}

const Estate = (props) => {
  const {
    params: { estateId },
    cookie,
  } = props

  const router = useRouter()

  const [estate, setEstate] = useState(null)
  const [estateError, setEstateError] = useState(false)
  const [partValue, setPartValue] = useState(1)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = estateId && (await api.get(`/estates/${estateId}`))

        setEstate(data)
      } catch (error) {
        setEstateError(error)
      }
    })()
  }, [])

  const handleClick = async () => {
    try {
      await api.post(`/estates/${estateId}/buy-parts`, { parts: partValue })
      router.reload()
    } catch (error) {
      router.push("/login")
    }
  }

  return estateError ? (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <p className="text-3xl font-semibold">{`${estateError.response.status}: ${estateError.response.data.message}`}</p>

      <Link
        href="/estates"
        className="font-semibold bg-[#B6A6CA] px-4 py-2 rounded-xl flex gap-2"
      >
        <ArrowLeftIcon className="w-4 " />
        <span>GO BACK</span>
      </Link>
    </div>
  ) : (
    estate && (
      <Layout isAuthenticated={cookie}>
        <div className="w-full grid grid-cols-2 gap-8 shadow-lg shadow-[#B6A6CA] p-4 rounded-3xl">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-4">
              <Image
                src={estate.image}
                alt="Estate image"
                width={500}
                height={500}
                priority
                style={{ objectFit: "cover" }}
                className="w-full h-72 rounded-xl"
              />
              <div>
                <h2 className="text-xl font-bold">{estate.title}</h2>

                <div className="flex gap-2 items-center">
                  <MapPinIcon className="w-4" />
                  <p>{estate.location}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <CalendarIcon className="w-4" />
                  <p>
                    {new Intl.DateTimeFormat("fr-FR", {
                      dateStyle: "long",
                      timeStyle: "short",
                    }).format(new Date("2023-12-01"))}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <BanknotesIcon className="w-4" />
                  <p>{`${new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(estate.value)} à collecter`}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <PiCurrencyEth className="w-4 h-4" />
                  <p>{`${new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "ETH",
                  }).format(estate.value * 0.00056)} à collecter`}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <BsBricks className="w-4 h-4" />
                  <p>{`${estate.parts_left} ${
                    estate.parts_left > 1 ? "parts restantes" : "part restante"
                  }`}</p>
                </div>
              </div>
            </div>

            {estate.parts_left > 0 && (
              <div className="flex flex-col gap-2">
                <p>
                  {`${partValue} ${
                    partValue > 1 ? "parts" : "part"
                  } = ${new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(
                    estate.single_value * partValue
                  )} / ${new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "ETH",
                  }).format(estate.single_value * partValue * 0.00056)}`}
                </p>

                <div className="flex gap-2">
                  <Select max={estate.parts_left} setPartValue={setPartValue} />
                  <button
                    className="flex gap-2 justify-center items-center bg-[#B6A6CA] px-4 py-2 rounded-xl w-full"
                    onClick={handleClick}
                  >
                    <span className="text-black font-medium">INVESTIR</span>
                    <ArrowTrendingUpIcon className="w-4 text-black" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <p className="text-justify">{estate.description}</p>
          </div>
        </div>
      </Layout>
    )
  )
}

export default Estate
