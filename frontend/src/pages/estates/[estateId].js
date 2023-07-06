import DisplayItem from "@/components/DisplayItem"
import Layout from "@/components/Layout"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  BanknotesIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline"
import { PiCurrencyEth } from "react-icons/pi"
import { useRouter } from "next/router"

export const getServerSideProps = async ({ params }) => {
  return {
    props: { params },
  }
}

const Estate = (props) => {
  const {
    params: { estateId },
  } = props

  const router = useRouter()

  const [estate, setEstate] = useState(null)
  const [estateError, setEstateError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } =
          estateId &&
          (await axios.get(`http://localhost:3001/api/estates/${estateId}`))

        console.log(data)
        setEstate(data)
      } catch (error) {
        setEstateError(error)
      }
    })()
  }, [])

  const handleClick = async () => {
    // hihi
    try {
      await axios.post(
        `http://localhost:3001/api/estates/${estateId}/buy-parts`,
        { parts: 10 }
      )
    } catch (error) {
      router.push("/sign-in")
    }
  }

  return estateError ? (
    <div className="grid place-items-center h-screen">
      <p className="text-3xl font-semibold">{`${estateError.response.status}: ${estateError.response.data.message}`}</p>
    </div>
  ) : (
    estate && (
      <Layout>
        <div className="w-full grid grid-cols-2 gap-8 shadow-lg shadow-[#B6A6CA] p-4 rounded-3xl">
          <div className="flex flex-col justify-between">
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
              </div>
            </div>

            <div>
              <button
                className="flex gap-2 justify-center items-center bg-[#B6A6CA] px-4 py-2 rounded-xl w-full"
                onClick={handleClick}
              >
                <span className="text-black font-medium">INVESTIR</span>
                <ArrowTrendingUpIcon className="w-4 text-black" />
              </button>
            </div>
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
