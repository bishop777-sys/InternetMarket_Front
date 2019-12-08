export default class ApiService{
    
    createItem = async (item, URL) =>{
        let json = await fetch(`https://localhost:44385/${URL}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        return json;
    }

    getItem = async (id, URL) =>{
        let Id = Number(id);
        let json = await fetch(`https://localhost:44385/${URL}?id=${Id}`);
        return json;
    }
}