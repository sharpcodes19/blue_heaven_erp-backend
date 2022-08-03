import model from '../../models/customer'

const postAsync = async (customer: CustomerProps) => {
	const entry = new model(customer)
	entry.save()
}

export default postAsync
