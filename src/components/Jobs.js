import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAudioDescription, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

/* graphql steps
1 - allStrapiJobs
  2 - nodes
    3 - company
        date
        position
        desc
            4 - id
                name
*/
const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

// Here we are pulling through the jobs data from Strapi
const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs:{nodes:jobs},
  } = data
const [value, setValue] = React.useState(0)
const {company,position,date,desc} = jobs[value];



// We are returning the information from jobs to display for the user
  return (
  <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((item,index)=>{
          return (
            <button 
            key={item.strapiId}
             onClick={()=> setValue(index)}
            className={`job-btn ${index === value && 'active-btn'}`}
            >
            {item.company}
            </button>
          )
        })}
      </div>
      {/* job info */}
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item)=>{
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
        More Info
    </Link>
    </section>
  )
}

export default Jobs
