import model from '../../models/visitor_info'

const postAsync = (data: VisitorProps) => {
	const entry = new model(data)
	entry.save()
}

export default postAsync
