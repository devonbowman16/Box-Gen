import React, {useState} from 'react';

import styled from 'styled-components';

const BlockForm = () => {

    const [blockInfo, setBlockInfo] = useState({
        color:"",
    })

    const [blockList, setBlockList] = useState([])

    const blockAdd=(e)=>{
        e.preventDefault();
        console.log("Added " + blockInfo);
        StyledBox= document.createElement(StyledBox);
    }

    let StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${blockInfo => blockInfo.color};
    width: 200px;
    height: 200px;
`;


    return (
        <div>
            <form onSubmit={(e)=>blockAdd(e)}>
                <div className="form-group">
                    <label htmlFor="">Color</label>
                    <select onChange = {(e)=>setBlockInfo(e.target.value)} name="color" id="" className="form-control">
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Pink">Pink</option>
                    </select>
                </div>
                <input type="submit" value="add" className="btn btn-success"/>
            </form>
            <hr />
            




        </div>
    );
};


export default BlockForm;