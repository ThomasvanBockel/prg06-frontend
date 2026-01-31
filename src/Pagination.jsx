function Pagination({next, previous, newPage}) {
    console.log(next)
    console.log(previous, "vorige")


    let nextButton
    let previousButton

    if (next) {
        nextButton = (
            <button className="bg-white border border-black text-black px-4 py-2 rounded items-end ml-auto"
                    onClick={() => newPage(next.href)}>Next</button>
        )
    }

    if (previous) {
        previousButton = (
            <button className="bg-white border border-black text-black px-4 py-2 rounded"
                    onClick={() => newPage(previous.href)}>Previous</button>
        );
    }

    return (
        <>
            <div className="flex items-center w-full">

                {previousButton}
                {nextButton}
            </div>
        </>
    );
}

export default Pagination;