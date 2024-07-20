import { Component } from "react";


 class Footer extends Component{
    render() {

        return(
            <div className=" px-[4rem] flex  justify-between mt-[3rem] bg-[#50C878] py-11 ">
                <div className=" space-y-5">
                <h1 className=' text-[2rem] font-Far  '>Al- 
                    <span className=' text-[#ffff] '>Hikmah</span></h1>
                    <p className=" text-white">Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Eaque, explicabo?</p>
                     <div className="flex space-x-3 text-white ">
                        <div className=" ">
                        <i class="fa-brands fa-facebook fa-2xl"></i>
                        </div>
                        <div className="">
                        <i class="fa-brands fa-twitter fa-2xl"></i>
                        </div>
                        <div className="">
                        <i class="fa-brands fa-instagram fa-2xl"></i>
                        </div>
                     </div>
                    
                   
                </div>

                <div className=" block  ">
                     <div className="">
                     <h1 className=" font-Far text-[1.5rem] font-semibold text-white ">Headers</h1>
                        <ul className=" space-y-2 font-Far text-white">
                            <li>Home</li>
                            <li>ParentingPrinciples</li>
                            <li>ParentingStages </li>
                            <li>Footer</li>
                        </ul>
                     </div>
                     
                </div>
                 <div className="">
                    <h1 className="font-Far text-[1.5rem] font-semibold text-white">Services</h1>
                 <ul className="space-y-2 font-Far text-white">
                            <li>Parenting Workshops</li>
                            <li>Online Resources</li>
                            <li>Youth Programs </li>
                            <li>Family Activities</li>
                        </ul>
                 </div>
            </div>
        )
    }
    
}
export default Footer;
