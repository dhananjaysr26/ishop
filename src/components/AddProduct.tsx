import React, { useEffect, useState } from "react"
interface props {
    setAddProduct: Function
}

const AddProduct: React.FC<props> = ({ setAddProduct }) => {
    const [currStage, setCurrStage] = useState(0)
    const [success, setSuccess] = useState(false)
    const [counter, setCounter] = useState(5)
    let TimerId:any=null

    const startTimer = () => {
        TimerId = setInterval(() => {
                setCounter(pre => pre - 1)
        }, 1000)
    }
    useEffect(()=>{
        if (counter== 0) {
            setAddProduct(false)
            clearInterval(TimerId)
        }
    },[counter])
    // console.log(counter,"HI")
    return (
        <div className='fixed top-0 right-0 md:static w-screen md:w-[40%] bg-slate-200 rounded-3xl rounded-r-none h-screen py-5'>
            <div className='flex justify-start items-center px-3'>
                <img
                    src='icons/close-icon.svg'
                    alt='close=icon'
                    onClick={() => setAddProduct(false)}
                    className="cursor-pointer"
                />
                <p className=' w-full text-center'>Create a Request</p>
            </div>
            {/* form stage */}
            <div className=" bg-white md:mx-1 h-32 flex items-center justify-around my-5 px-10">
                <div className=" flex items-center pt-5 flex-col">
                    <img src={currStage >= 0 ? "/icons/stage-done.png" : "/icons/stage.png"} />
                    <p className=" text-base font-medium">Product</p>
                </div>
                <hr className=" w-1/4 text-center m-0 p-0 text-black"></hr>
                <div className="flex items-center pt-5 flex-col">
                    <img src={currStage >= 1 ? "/icons/stage-done.png" : "/icons/stage.png"} />
                    <p className=" text-base font-medium">Delivery</p>
                </div>
                <hr className=" w-1/4 text-center m-0 p-0 text-black"></hr>
                <div className="flex items-center pt-5 flex-col">
                    <img src={currStage >= 2 ? "/icons/stage-done.png" : "/icons/stage.png"} />
                    <p className=" text-base font-medium">Summary</p>
                </div>
            </div>
            {/* Form */}
            {
                currStage === 0 &&
                <div className=" px-5">
                    <p className=" text-lg md:text-2xl font-bold">1. Product Detail</p>
                    <form className=" flex gap-5 flex-col">
                        <p>Product Name</p>
                        <input type={"text"} placeholder="Enter Product Name" />

                        <p>Product Image</p>
                        <input type={"file"} />

                        <p>Product Price</p>
                        <input type={"number"} placeholder="Enter Product Price $" />

                        <p>Product Description</p>
                        <textarea placeholder="Enter Product Description" />
                        <button className="px-5 py-2 bg-orange-300" onClick={() => setCurrStage(pre => pre + 1)}>Next</button>
                    </form>
                </div>
            }
            {
                currStage === 1 &&
                <div className=" px-5">
                    <p className=" text-lg md:text-2xl font-bold">2. Delivery Detail</p>
                    <form className=" flex gap-5 flex-col">
                        <p>Owner Name</p>
                        <input type={"text"} placeholder="Enter Owner Name" />

                        <p>Owner Address</p>
                        <textarea placeholder="Enter Address" />
                        <button className="px-5 py-2 bg-orange-300" onClick={() => setCurrStage(pre => pre + 1)}>Next</button>
                    </form>
                </div>
            }
            {
                currStage === 2 &&
                <div className=" px-5">
                    <p className=" text-lg md:text-2xl font-bold">3. Summary</p>
                    <div className=" flex gap-5 flex-col">
                        <p>Please Check the Information CareFully!</p>
                        <button className="px-5 py-2 bg-orange-300" onClick={() => {
                            setCurrStage(pre => pre + 1)
                            setSuccess(true)
                            startTimer()
                        }}>Submit</button>
                    </div>
                </div>
            }
            {success &&
                <div className=" flex items-center justify-center flex-col mt-12 gap-2">
                    <img src="/icons/done-icon.svg" alt="done" className=" h-10" />
                    <p>Your Request has been Submitted Successfully!</p>
                    <p>Thank You</p>

                    <p className=" py-5">will close in {counter}s</p>
                </div>
            }
            <div>

            </div>
        </div>
    )
}
export default AddProduct