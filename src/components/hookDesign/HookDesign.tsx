import React from 'react';
import { StateExternalScope,StateCallback } from './State';



export const HookDesign = () =>{
    return  <div className="root">
            <StateExternalScope/>
            <StateCallback/>
        </div>
}