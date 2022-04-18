// code your solution here


function superbowlWin(record)
{
    let findWinners = record.find((item)=>{
        if(item.result === "W")
        {
            return item["year"]
        }
    })
    return findWinners.year

}





