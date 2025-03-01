
const getData = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`)
    return res.json()
}

interface Params {
    params: { name: string }
}

function getFlagEmoji(countryCode:string) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char =>  127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

const Page = async ({ params }: Params) => {
    const resolvedParams = await params
    const json = await getData(resolvedParams.name)
    console.log(json)

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-black">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[120px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-md px-4 py-8">
                <div className="rounded-lg border border-purple-900/50 bg-black/80 p-8 shadow-lg backdrop-blur-sm">
                    <div className="mb-6 text-center">
                        <h1 className="mb-2 text-2xl font-bold text-white">Nationality Prediction</h1>
                        <p className="text-purple-400/80">Results for {json.name}</p>
                    </div>

                    <div className="space-y-4">
                        {json.country.map((item: any) => (
                            <div key={item.country_id} className="flex justify-between rounded-md bg-purple-900/20 p-2">
                                <span className="text-purple-300">{getFlagEmoji(item.country_id)}</span>
                                <span className="text-purple-400">{(item.probability * 100).toFixed(2)}%</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <a
                            href="/"
                            className="inline-block rounded-md bg-gradient-to-r from-purple-900 to-purple-800 px-4 py-2 text-white transition-all hover:from-purple-800 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Try Another Name
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Page

