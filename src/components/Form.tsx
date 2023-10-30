import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [email,setEmail] = useState('');
    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const { value } = target;

        if (value.length==0) {
            setError(false);
            console.log('hero');
        }

        else if (!value.includes('@')) {
            setError(true);
        }
        else{
            setError(false);
        }
        setEmail(value);

    }

    const handleSubmit = () => {
        // e.preventDefault();

        if (error || email.length==0){
            return;
        }
        else{
            navigate('/Vite-TailwindCSS-React-Newsletter-Sign-Up-Form/thankyou',{ state: { email:email }})
        }

    }

    return (
        <>
            <section className=" w-full flex flex-col-reverse lg:flex-row lg:rounded-3xl bg-white gap-4 lg:p-4">
                <article className=" w-full lg:w-96 flex flex-col items-center lg:items-stretch gap-8 p-4 lg:py-20 lg:mx-10">
                    <h1 className="font-bold">Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on: </p>
                    <ul className="flex flex-col gap-3">
                        <div className="flex flex-row gap-2">
                        <img src={window.location.origin + `/images/icon-list.svg`} />
                        <li>Product discovery and building what matters</li>
                        </div>
                        <div className="flex flex-row gap-2">
                        <img src="/images/icon-list.svg" />
                        <li>Measuring to ensure updates are a success</li>
                        </div>
                        <div className="flex flex-row gap-2">
                        <img src="/images/icon-list.svg" />
                        <li>And much more</li>
                        </div>
                    </ul>
                    <form className="flex flex-col items-start gap-6" onSubmit={handleSubmit}>
                        <div className="grow flex flex-col w-full gap-2">
                        <div className="flex flex-row justify-between">
                        <label htmlFor="email" className=" text-sm font-bold">Email address</label>
                        <p className="text-sm font-bold text-tomato"> {!error ? '' : 'Valid email required'}</p>
                        </div>
                        <input onChange={handleChange} type="email" name="email" id="email" value={email} className={`rounded-lg border-2 border-gray-300 p-2 ${error?'focus:outline-none focus:border-tomato border-tomato text-tomato':''}`} placeholder="email@company.com" required/>
                        </div>
                        <button className="w-full  text-white cursor-pointer bg-darkSlate hover:bg-tomato">Subscribe to monthly newsletter</button>
                    </form>
                </article>

                <article className="h-80 lg:h-auto rounded-3xl">
                    <img style={{height:"100%", width:'100%'}} className="object-cover rounded-b-3xl" src="/images/illustration-sign-up-desktop.svg" />
                </article>
            </section>
        </>
    );
}

export default Form;