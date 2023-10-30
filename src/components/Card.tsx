
interface Props {
    email: string; // Define the type for the email prop.
  }

const Card:React.FC<Props> = ({email}) =>  {
    return (
        <>
        <section className="lg:w-96 bg-white lg:rounded-3xl mt-24 px-10 lg:py-12">
            <article className="flex flex-col items-start gap-6">
                <img className=" w-12" src="/images/icon-list.svg" />
                <h1 className="font-bold">Thanks for subscribing!</h1>
                <p className="text-sm">A confirmation email has been sent to <span className="font-bold">{email}.</span> Please open it and click the button inside to confirm your subscription.</p>
                <button className="w-full content-end text-white cursor-pointer bg-darkSlate hover:bg-tomato">Dismiss message</button>
            </article>
        </section>
        </>
    );
}

export default Card;