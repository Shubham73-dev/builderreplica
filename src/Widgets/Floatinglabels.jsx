import React from 'react'

const Floatinglabels = ({labels,types,placeValue}) => {
    return (
        <>
            <div class="form-floating mb-3">
                <input type={types} class="form-control" placeholder={placeValue}/>
                    <label for="floatingInput">{labels}</label>
            </div>
        </>
    )
}

export default Floatinglabels