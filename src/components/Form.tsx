
const Form = () => {

    return (
        <>
            <section className="flex flex-row rounded-3xl bg-white gap-4 p-4">
                <article className=" w-96 flex flex-col gap-8 py-20 mx-10">
                    <h1 className="font-bold">Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on: </p>
                    <ul className="flex flex-col gap-3">
                        <div className="flex flex-row gap-2">
                        <img src="/images/icon-list.svg" />
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
                    <form className="flex flex-col items-start gap-6">
                        <div className="grow flex flex-col w-full gap-2">
                        <label htmlFor="email" className=" text-sm font-bold">Email address</label>
                        <input type="email" name="email" id="email" className="rounded-lg border-2 border-gray-300 p-2" placeholder="email@company.com"/>
                        </div>
                        <button className="w-full  text-white cursor-pointer bg-darkSlate hover:bg-tomato">Subscribe to monthly newsletter</button>
                    </form>
                </article>

                <article className="rounded-3xl">
                    <img src="/images/illustration-sign-up-desktop.svg" />
                </article>
            </section>
        </>
    );
}

export default Form;