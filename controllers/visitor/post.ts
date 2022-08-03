import VisitorInfoModel from '../../models/visitor_info'

const postVisitorInfo = (data: VisitorProps) => {
	const entry = new VisitorInfoModel(data)
	entry.save()
}

export default postVisitorInfo
