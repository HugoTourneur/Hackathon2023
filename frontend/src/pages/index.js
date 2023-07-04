import Layout from "@/components/Layout"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <Layout isAuthenticated={"false"} />
      <div className="text-5xl font-bold text-center">
        L'immobilier sur Terre et au-delà
      </div>
      <div>
        <div className="flex bg-[#007E67] p-4 justify-around items-center my-8">
          <div className="w-6/12  p-2 rounded-md">
            <div className="text-xl font-bold">
              Le milieu de l'investissement immobilier accessible
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              hendrerit eros quis sodales gravida. Donec dolor justo, fringilla
              id gravida nec, accumsan sit amet arcu. In ut efficitur mi.
              Vivamus ligula turpis, aliquam quis massa quis, pharetra
              sollicitudin augue. Morbi a rutrum lorem. Curabitur vel odio at
              leo pharetra porta. Praesent auctor, augue at blandit posuere,
              erat nisi porttitor urna, vitae egestas eros erat eu lectus.
              Praesent ligula mi, pharetra eget cursus quis, posuere ac velit.
              Curabitur volutpat magna eu quam pulvinar, ac sodales enim
              condimentum. In hac habitasse platea dictumst. Nullam magna quam,
              finibus quis feugiat vel, pulvinar ac ligula.
            </div>
          </div>
          <Link
            href={"/learn"}
            className="flex bg-[#3DEDD0] rounded-lg px-2 items-center h-12"
          >
            <div>En apprendre plus </div>
            <ArrowRightCircleIcon className="pl-2 h-10 w-10" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
