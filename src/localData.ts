
const getLocalData = (data: string): unknown =>{
    return JSON.parse((localStorage.getItem(data) as string))
}

const checkLocalData = ()=>{
    const recent = JSON.parse((localStorage.getItem('recentOrdering') as string))

}


module.exports = {

}