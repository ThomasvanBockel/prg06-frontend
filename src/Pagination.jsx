function Pagination({next, previous, newPage}) {
    console.log(next)
    console.log(previous, "vorige")


    let nextButton
    let previousButton

    if (next) {
        nextButton = (
            <button onClick={() => newPage(next.href)}>Next</button>
        )
    }

    if (previous) {
        previousButton = (
            <button onClick={() => newPage(previous.href)}>Previous</button>   // CHANGED
        );
    }

    return (
        <>
            {previousButton}

            {nextButton}
        </>
    );
}

export default Pagination;