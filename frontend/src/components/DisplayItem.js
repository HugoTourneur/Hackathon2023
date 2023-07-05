import Image from "next/image"
import { useRouter } from "next/router"
import {
  BanknotesIcon,
  CalendarIcon,
  ChevronDoubleRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"

import { PiCurrencyEth } from "react-icons/pi"

const DisplayItem = ({ title, location, value, date, image, id }) => {
  const router = useRouter()

  const handleClick = (id) => {
    router.push(`/estates/${id}`)
  }

  return (
    <button onClick={() => handleClick(id)}>
      <div className="p-4 rounded-3xl w-fit grid gap-2 shadow-lg shadow-[#B6A6CA] hover:scale-105 hover:shadow-[#A09ABC] transition duration-300 text-left">
        <Image
          src={image}
          alt="propriété"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          priority
          className="rounded-xl w-50 h-60"
        ></Image>
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>

          <div className="flex gap-2 items-center">
            <MapPinIcon className="w-4" />
            <p>{location}</p>
          </div>

          <div className="flex gap-2 items-center">
            <CalendarIcon className="w-4" />
            <p>
              {new Intl.DateTimeFormat("fr-FR", {
                dateStyle: "long",
                timeStyle: "short",
              }).format(new Date(date))}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <BanknotesIcon className="w-4" />
            <p>{`${new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(value)} à collecter`}</p>
          </div>

          <div className="flex gap-2 items-center">
            <PiCurrencyEth className="w-4 h-4" />
            <p>{`${new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "ETH",
            }).format(value * 0.00056)} à collecter`}</p>
          </div>

          <div className="flex gap-2 mt-8 justify-center items bg-[#B6A6CA] px-4 py-2 rounded-xl">
            <p className="text-center text-black font-medium">VOIR DÉTAILS</p>
            <ChevronDoubleRightIcon className="w-4 text-black" />
          </div>
        </div>
      </div>
    </button>
  )
}

export default DisplayItem
