import Button from "../components/Button";
import {
	widthStoriesController,
	colorStoriesController
} from "../utils/StorybookUtils";
import { action } from "@storybook/addon-actions";

const variantStoriesController = {
	outlined: "Outlined",
	contained: "Contained"
};

export default {
	title: "Components/Button",
	component: Button,
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
		color: {
			options: Object.keys(
				colorStoriesController
			),
			control: {
				type: "select",
				labels: colorStoriesController
			}
		},
		variant: {
			options: Object.keys(
				variantStoriesController
			),
			control: {
				type: "select",
				labels: variantStoriesController
			}
		},
		onClick: { action: "onClick" }
	},
	args: {
		onClick: action("onClick"),
		width: "fill",
		disabled: false
	}
};

const Template = (args) => (
	<Button {...args} />
);

export const Contained = Template.bind(
	{}
);
Contained.args = {
	label: "Contained Button"
};

export const Outlined = Template.bind(
	{}
);
Outlined.args = {
	label: "Outlined Button",
	variant: "outlined"
};

