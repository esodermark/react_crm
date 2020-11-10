import CustomerDetails from '../components/CustomerList/CustomerDetails'

const CustomerDetailsPage = (props) => {
    const id = parseInt(props.match.params.id)

    return (
        <>
            <CustomerDetails id={id}/>
        </>
    )
}

export default CustomerDetailsPage
