import Link from "next/link"

const AccessoriesLink = () => {
    const linksList = [{
        title: "Bags",
        url: "bags"
    },
    {
        title: "Travel",
        url: "travel"
    },{
        title: "Accessories",
        url: "accessories"
    },{
        title: "Gifting",
        url: "gifting"
    },{
        title: "Jewellery",
        url: "jewellery"
    }]
  return (
    <div className="mx-auto py-2 flex justify-center gap-4 lg:w-1/2 lg:gap-8">
        {linksList.map((link, i) => (
            <Link 
                key={i} 
                href={`/#${link.url}`}
                className="text-slate-300 transition-colors hover:text-yellow-200"
            >{link.title}</Link>
        ))}
    </div>
  )
}

export default AccessoriesLink
