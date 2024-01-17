import { HiClipboardCheck, HiQrcode } from "react-icons/hi";
import { BiSolidCopy } from 'react-icons/Bi';
import { GrRefresh } from 'react-icons/Gr';
import { BsPencilSquare } from 'react-icons/Bs';
import { LuDelete } from 'react-icons/Lu';
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import QRCode from 'qrcode.react';
const Banner = () => {
    const [randomEmail, setRandomEmail] = useState('example@curious.com');
    const [QRShow, setQRShow] = useState(false)
    const [copy, setCopy] = useState(false)
    const [remove, setRemove] = useState(false)

  const generateRandomEmail = () => {
    const randomString = nanoid(12);
    const email = `${randomString}@curious.com`; 
    setRandomEmail(email);
  };

  useEffect(()=>{
    generateRandomEmail()
  },[])

  const copyToClipboard = () => {
    setQRShow(false)
    setCopy(true)
    const textField = document.createElement('textarea');
    textField.innerText = randomEmail;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    // setCopy(!copy)
    setTimeout(() => {
        setCopy(false)
      }, 3000);
  };


  const handleRefresh=()=>{
    window.location.reload();
  }
  const handleDelete=()=>{
    setRemove(true)
    setRandomEmail('example@curious.com');
    setQRShow(false)
    setTimeout(() => {
        setRemove(false)
      }, 3000);
  }

  const handleQRCodeGenerate =()=>{
    setQRShow(!QRShow)
  }

  



    return (
        <div>
            <div className="bg-slate-900 text-white pt-10 pb-10 px-3">
            <div className="border-dashed border-white border-2 p-4 md:p-10 md:w-3/5   mx-auto ">
                <h2 className="md:text-2xl text-center font-semibold my-5 md:my-8">Your Temporary Email Address</h2>
                <div className="flex items-center justify-center relative  w-full">
                    <div className="flex items-center bg-gray-800 py-2 px-4 md:py-3 md:px-8 rounded-2xl w-full relative ">
                        <p className="text-sm md:text-lg">{randomEmail}</p>
                        <button onClick={handleQRCodeGenerate} className=""><HiQrcode className="bg-gray-700   absolute top-0 right-0 h-full w-10 md:w-14 rounded-full p-1 md:p-3 "></HiQrcode></button>
                    </div>
                        {QRShow && <div className="absolute right-2 top-14 p-4 bg-white">
                        <QRCode value={randomEmail} />
                        </div>}
                    <div className="tooltip tooltip-bottom" data-tip={copy ? 'Copied' : 'Copy'}>
                    <button onClick={copyToClipboard}><HiClipboardCheck className="bg-teal-400 hover:bg-gray-700 w-8 h-8 md:h-full  md:w-12 ml-2 md:ml-3 rounded-full p-1 md:p-2"></HiClipboardCheck></button>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5 mx-auto text-gray-400 text-xs md:text-sm text-center mt-10">
                <p>Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.</p>
            </div>
        </div>
        <div className=' bg-white px-2 py-10 w-full shadow-gray-300 shadow-md drop-shadow-md'>
                <div  className='flex flex-wrap w-full mx-auto gap-8 items-center justify-center'>
                <div className="md:tooltip md:tooltip-bottom" data-tip={copy ? 'Copied' :'Copy to Clipboard'}>
                <button onClick={copyToClipboard} className='py-3 md:py-4 px-4 md:px-10 rounded-3xl flex items-center ease-in duration-200 text-gray-950 font-normal shadow-lg drop-shadow-lg bg-gray-100 hover:bg-green-600'>
                <p className='mr-4'>{<BiSolidCopy></BiSolidCopy>}</p>
                <p className=''>copy</p>
            </button>
                </div>

                <div className="md:tooltip md:tooltip-bottom" data-tip='Refresh Message List'>
                <button onClick={handleRefresh} className='py-3 md:py-4 px-4 md:px-10 rounded-3xl flex items-center ease-in duration-200 text-gray-950 font-normal shadow-lg drop-shadow-lg bg-gray-100 hover:bg-green-600'>
                <p className='mr-4'>{<GrRefresh></GrRefresh>}</p>
                <p className=''>Refresh</p>
            </button>
                </div>

                <div className="md:tooltip md:tooltip-bottom" data-tip='Change E-mail Address'>
                <button onClick={generateRandomEmail} className='py-3 md:py-4 px-4 md:px-10 rounded-3xl flex items-center ease-in duration-200 text-gray-950 font-normal shadow-lg drop-shadow-lg bg-gray-100 hover:bg-green-600'>
                <p className='mr-4'>{<BsPencilSquare></BsPencilSquare>}</p>
                <p className=''>Change</p>
            </button>
                </div>

                <div className="md:tooltip md:tooltip-bottom" data-tip={remove ? 'Deleted' :'Delete This Address'}>
                <button onClick={handleDelete}  className='py-3 md:py-4 px-4 md:px-10 rounded-3xl flex items-center ease-in duration-200 text-gray-950 font-normal shadow-lg drop-shadow-lg bg-gray-100 hover:bg-green-600'>
                <p className='mr-4'>{<LuDelete></LuDelete>}</p>
                <p className=''>Delete</p>
            </button>
                </div>


                {/* <Button copyToClipboard={copyToClipboard} title="copy" toolTipData="Copy to Clipboard" icon={<BiSolidCopy></BiSolidCopy>}></Button>
                <Button title="Refresh" toolTipData="Refresh Message List" icon={<GrRefresh></GrRefresh>}></Button>
                <Button generateRandomEmail={generateRandomEmail} title="Change" toolTipData="Change E-mail Address" icon={<BsPencilSquare></BsPencilSquare>}></Button>
                <Button title="Delete" toolTipData="Delete This Address" icon={<LuDelete></LuDelete>}></Button> */}
                </div>
            </div>
        </div>

    );
};

export default Banner;