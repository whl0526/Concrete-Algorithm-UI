function fetch() {
    const url = "https://oa.tapaculo365.com/tp365/v1/account/check?api_key=4528458&api_secret=3fa6d40e4461cd250a683b86eed42bad"

    fetch(url).then((response)=>console.log("response", response))
        .catch(function(error){
            console.error(error);
        })
}