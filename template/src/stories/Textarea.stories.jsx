import Textarea from "../components/Textarea";
import {
	heightStoriesController,
	widthStoriesController,
	colorStoriesController
} from "../utils/StorybookUtils";

export default {
	title: "Components/Textarea",
	component: Textarea,
	argTypes: {
		width: {
			options: Object.keys(
				widthStoriesController
			),
			control: {
				type: "select",
				labels: widthStoriesController
			}
		},
		height: {
			options: Object.keys(
				heightStoriesController
			),
			control: {
				type: "select",
				labels: heightStoriesController
			}
		},
		color: {
			options: Object.keys(
				colorStoriesController
			),
			control: {
				type: "select",
				labels: colorStoriesController
			}
		}
	},
	args: {
		error: false,
		width: "fill",
		height: "lg"
	}
};

const Template = (args) => (
	<Textarea {...args} />
);

export const Primary = Template.bind(
	{}
);
Primary.args = {
	label: "Primary Label",
	name: "primary"
};

export const Secondary = Template.bind(
	{}
);
Secondary.args = {
	label: "Secondary Label",
	name: "secondary",
	color: "secondary"
};

export const Tertiary = Template.bind(
	{}
);
Tertiary.args = {
	label: "Tertiary Label",
	name: "tertiary",
	color: "tertiary"
};

