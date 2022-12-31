import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
export default function () {
    return (
        <header className="py-3">
            <div className='container'>
                <div className="row inx">
                    <div className="col-md-6 col-12">
                        <h1>My Name is <i>ahmed</i></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur suscipit odio rem, repudiandae vero nemo tempore non illo, accusantium rerum corporis maxime odit ratione? Obcaecati minima molestias cupiditate sapiente repellendus.</p>
                        <button className="hire-me tage Hfont" type="button">hire me</button>
                        <div className="tages d-flex flex-row flex-wrap justify-content-between">
                            <h6 className="tage Hfont">front end</h6>
                            <h6 className="tage Hfont">mobile app</h6>
                            <h6 className="tage Hfont">react</h6>
                            <h6 className="tage Hfont">bot</h6>
                            <h6 className="tage Hfont">typescript</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-none d-md-block">
                    <StaticImage src="https://cdn.discordapp.com/ephemeral-attachments/1056263700899709013/1056264253729935400/0506651765_acrylic_texture_mariachi_skeleton_playing_music_trum_7a60e6af-f9fe-497b-88ed-56839a157503.png" alt="ahmed image" layout="constrained" placeholder='blurred'/>
                    </div>
                </div>
                <div className='row'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita est tempora harum, fuga porro laboriosam inventore cumque odio, dolores commodi corporis officia voluptatibus dolorem iste repellendus? Ratione hic ab rem temporibus. Nihil ex, doloribus illo et eos suscipit quidem! Unde culpa tempora quaerat alias reprehenderit debitis, eaque consectetur iure a fugiat. Veritatis omnis blanditiis minus ratione odit possimus suscipit, impedit optio consequuntur libero. Alias debitis eos neque sit omnis magni eaque numquam tempore. Itaque modi exercitationem nesciunt ducimus. Aliquid reiciendis dolor, architecto vero obcaecati doloremque voluptas distinctio totam neque? Vel, iste aspernatur. Expedita cupiditate perferendis nisi natus dolore ipsa asperiores possimus eos nesciunt, vel nulla atque quos quisquam doloremque minima quidem quia id impedit odio maiores facilis quasi dicta. Debitis nisi consequuntur repudiandae dolore officiis illum reiciendis ex libero magni dolor exercitationem repellendus ipsa, dolorem a expedita omnis provident quibusdam autem fuga. Voluptatibus maiores modi recusandae ea perferendis quo quaerat.
                </div>
            </div>
        </header>
    )
}
