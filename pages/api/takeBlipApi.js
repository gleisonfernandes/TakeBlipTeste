async function takeBlip(request, response){
    
    let url ='https://api.github.com/orgs'
    let org = 'takenet';
    let stek = 'C#';
    let direction = 'desc';
    let quantidade = 5;
    let cont = 0;

    const scriptResponse = await fetch(`${url}/${org}/repos?q=language:${stek}&type=public&direction=${direction}`);
    
    const scriptResponseJson = await scriptResponse.json();
    
    const id = scriptResponseJson.id;
    const full_name = scriptResponseJson.full_name;
    const description = scriptResponseJson.description;
    const language = scriptResponseJson.language;
    const avatar_url = scriptResponseJson.owenr.avatar_url;
    const created = scriptResponseJson.created_at

    if(language===stek && cont < quantidade){
        response.json({

            id: id,
            full_name: full_name,
            description: description,
            language: language,
            avatar_url: avatar_url,
            created: created
        });
        cont++;
    }else{
        response.json({
            nao: 'o if não funcionou'
        });
    }
}
export default takeBlip;