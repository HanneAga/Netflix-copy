import React from 'react'
import q from 'qjuul'
import logo from "../Netflix-Logo.png"
import avatar from "../avatar_github.png"
import { BiSearch } from 'react-icons/bi'
import { TbBell } from 'react-icons/tb'
import { TiArrowSortedDown } from 'react-icons/ti'

const Navbar = () => {




    return (<React.Fragment>
        <q.div className="navbar" w100 frcc fsb>
            <q.div frcl co="white" gap={"15px"} nowrap>
                <img className='netflix-logo' src={logo} alt="Netflix-logo" />
                <q.div foWe="600" foSi="18px">Startsiden</q.div>
                <q.div pointer foSi="14px">Serier</q.div>
                <q.div pointer foSi="14px">Filmer</q.div>
                <q.div pointer foSi="14px">Nytt og populært</q.div>
                <q.div pointer foSi="14px">Min liste</q.div>
            </q.div>
            <q.div frcr co="white" gap={"15px"} >
                <BiSearch size={"30px"} />
                <q.div pointer foSi={"14px"} foWe={"500"}>Barn</q.div>
                <TbBell size={"30px"} />
                <img className='avatar' src={avatar} alt="Egen avatar" />
                <TiArrowSortedDown size={"25px"} />
            </q.div>

        </q.div>


    </React.Fragment>

    )
}

export default Navbar