
import Servicecard from './Component/Servicecard'


const Services = () => {
  const service = [{ work: "Webdesign", Discription: "Hii This is test Service Card" }]

  return (
    <div>
      <Servicecard service={service[0]} />
    </div>
  )
}

export default Services
