import React from 'react'
import { TbEdit, TbTrash } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Remo</span>
            <p>Posted 2 days ago</p>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <a><TbEdit /></a>
              </Link>
                <a><TbTrash /></a>
            </div>
          </div> 
        </div>

          <h1>The Role of Shared Goals in Fostering Team Collaboration</h1>
          <p>**Setup (Headline)**:
"Unmasking the Foundation of Team Collaboration: The Imperative of Honest Communication in Establishing Shared Goals"

**Obstacle (Introduction)**:
"Open and honest communication – it seems obvious, yet it’s often a formidable challenge many founders grapple with, especially when tackling tough topics. This roadblock can lead to misalignment, marring team collaboration and impacting productivity."

**Resolution (Body)**:
"Honest communication plays a pivotal role in establishing shared goals, the cornerstone of successful team collaboration. Here's how embracing openness has transformed our teamwork:

1. **Building Trust through Transparency**: When we decided to tackle the hard conversations, we established a culture of transparency. This fostered trust, making it easier for us to align our individual visions into a shared goal.
2. **Creating an Environment of Accountability**: Open communication led to clear expectations. Everyone on the team knew their role in achieving our collective goal, promoting a sense of responsibility and accountability.
3. **Facilitating Effective Decision Making**: With honesty at the forefront, we could collectively address challenges, discuss different viewpoints, and make informed decisions to keep us on track towards our shared objective.
4. **Strengthening Team Bond**: The journey towards shared goals, fueled by open communication, deepened our understanding of each other. This not only improved our collaboration but also fortified our bond as a team.

Transparency and honesty, though challenging, are vital in fostering team collaboration. By aligning our goals through open dialogue, we've seen increased trust, improved decision-making, and a stronger team bond.

What are some hard conversations that you've faced in your team, and how have they shaped your shared goals? Let's start a conversation in the comments."</p>

      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single