function PrimaryButton ( { text, ...rest } ) {
    return <button className="btn btn-primary" { ...rest } >{ text }</button>
}

export default PrimaryButton;
