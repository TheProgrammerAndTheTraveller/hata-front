import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfDavid, faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons';
import Stack from 'react-bootstrap/Stack';

function Stars({ratio}){

    const stars = [];

    for (let i = 0; i!=5; i++){
        let staricon;
        const starvalue=ratio-i;
        if(0.5<=starvalue && starvalue<1){
            staricon=faStarHalf;
        }else if(0.5>starvalue){
            staricon=faStarOfDavid;
        }else{
            staricon=faStar;
        }
        stars.push(<p key={i}><FontAwesomeIcon icon={staricon} /></p>)

    }

    return(
        <>
           <Stack direction="horizontal" gap={3}>
            {stars}
            </Stack>
        </>
    );
}

export default Stars;