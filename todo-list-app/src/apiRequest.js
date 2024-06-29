let apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        let response = await fetch(url, optionsObj)
        if(!response.ok) throw Error("Please reload the app")
        return await response.json() // we don't need this. Without give this line also works fine.
    }
    catch(err) {
        errMsg = err.message
    }
    finally{
        return errMsg
    }
}

export default apiRequest