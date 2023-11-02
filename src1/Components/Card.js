import { memo } from "react";
function Card({}){
    let array = [
        {'name':'Card 1'},
        {'name':'Card 2'}
    ];
    console.log('this is card view');
    return(
        <>
        <div>
            {
                array.map(item=>
                    <span>Name :{item.name}</span>
                )            
            }
        </div>
        </>
    )
}

export default memo(Card);