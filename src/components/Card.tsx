
const Card = () => {
    return (
        <>
        <section className="w-96 bg-white rounded-3xl px-10 py-12">
            <article className="flex flex-col items-start gap-6">
                <img className=" w-12" src="/images/icon-list.svg" />
                <h1 className="font-bold">Thanks for subscibing!</h1>
                <p className="text-sm">A confirmation email has been sent to <span className="font-bold">Hero.</span> Please open it and click the button inside to confirm your subscription.</p>
                <button className="w-full text-white cursor-pointer bg-darkSlate hover:bg-tomato">Dismiss message</button>
            </article>
        </section>
        </>
    );
}

export default Card;