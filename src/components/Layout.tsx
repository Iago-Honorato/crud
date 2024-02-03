import Title from "./Title"


//Recurso do typescript que irá exigir que meu componente Layoute possua titulo e uma tag. Uma forma de garantir que as propiedades sejam adicionadas ao componente
interface LayoutProps {
    title: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return(
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}>
            <Title>{props.title}</Title>
            <div className="p-6 ">
                {props.children}
            </div>
        </div>

    )
}