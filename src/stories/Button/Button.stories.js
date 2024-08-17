import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
}

export default meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Button',
    theme: 'primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    text: 'Button',
    icon: true,
    theme: 'primary',
};

export const PrimaryWithCaret = Template.bind({});
PrimaryWithCaret.args = {
    text: 'Button',
    caret: true,
    theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Button',
    theme: 'secondary',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
    text: 'Button',
    icon: true,
    theme: 'secondary',
};

export const SecondaryWithCaret = Template.bind({});
SecondaryWithCaret.args = {
    text: 'Button',
    caret: true,
    theme: 'secondary',
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
    text: 'Button',
    theme: 'primary',
    disabled: true,
};
export const DisabledPrimaryWithIcon = Template.bind({});
DisabledPrimaryWithIcon.args = {
    text: 'Button',
    icon: true,
    theme: 'primary',
    disabled: true,

};
export const DisabledPrimaryWithCarrot = Template.bind({});
DisabledPrimaryWithCarrot.args = {
    text: 'Button',
    caret: true,
    theme: 'primary',
    disabled: true,
};
export const DisabledSecondary = Template.bind({});
DisabledSecondary.args = {
    text: 'Button',
    theme: 'secondary',
    disabled: true,
};
export const DisabledSecondaryWithIcon = Template.bind({});
DisabledSecondaryWithIcon.args = {
    text: 'Button',
    icon: true,
    theme: 'secondary',
    disabled: true,

};
export const DisabledSecondaryWithCarrot = Template.bind({});
DisabledSecondaryWithCarrot.args = {
    text: 'Button',
    caret: true,
    theme: 'secondary',
    disabled: true,
};