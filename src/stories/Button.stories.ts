import Button from './Button.svelte'

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
}

export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    }
}

export const Secondary = {
    args: {
        ...Primary.args,
        primary: false,
    }
}
