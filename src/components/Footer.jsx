import React from "react"

function Footer() {
  const day = new Date ()
  const year = day.getFullYear()
  return (
    <div className="bg-blue-600 text-white py-8">
    <div className="grid sm:grid-cols-1 md:grid-cols-4 w-10/12 m-auto gap-8">
    <div className="">
    <div className="text-bold uppercase py-9"><h1 className="font-bold text-3xl font-serif">carserra</h1></div>
    </div>

    
    <div className="">
    <h1 className="text-lg font-bold uppercase">Find Support</h1>
    <div className="">
    <ul>
    <li className="py-1">info@carserra.com</li>
    <li className="py-1">www.carserra.com</li>
    <li className="py-1">admin@carserra.com</li>
    </ul>
    </div>
    </div>
    <div className="">
    <h1 className="text-lg font-bold uppercase">Find Us On</h1>
    <div className="">
    <ul>
    <li className="py-1">Facebook</li>
    <li className="py-1">Twitter</li>
    <li className="py-1">Instagram</li>
    </ul>
    </div>
    </div>
    <div className="">
    <h1 className="text-lg font-bold uppercase">Find Spacification</h1>
    <div className="">
    <ul>
    <li className="py-1">Toyota Porsche  BMW</li>
    <li className="py-1">Honda  KIA      Audi</li>
    <li className="py-1">Tesla  Mercades Nisan</li>
    </ul>
    </div>
    </div>
    </div>
   
    <div className="bg-blue-500">
    <div className="w-10/12 m-auto text-center text-[#FAFAFA] py-1">
      <p className=""> &copy; All Right Reserved Carserra 2023</p>
    </div>
  </div>
    </div>
  )
}

export default Footer