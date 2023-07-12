import "./badge.scss"

const Badge = ({ badge }) => {
  return (
    <div className="badge-container bg-soft-blue margin-10">
        <div className={`badge-circle ${badge.bgColor}`}>
            <div className="circle-content white">
                <img class={badge.imgCls} width={badge.width} height={badge.height} src={badge.img} alt={badge.name}/>
            </div>
        </div>
    </div>
  )
}

export default Badge