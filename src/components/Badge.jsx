export default function Badge({label,value}){
    return (
  
        <div className="badge">
            <strong className="badge-label">{label}:</strong>
            <strong className="badge-value">{value}</strong>
        </div>
    )
}