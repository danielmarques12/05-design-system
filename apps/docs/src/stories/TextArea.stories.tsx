import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          padding: '$4',
          borderRadius: '$md',
          backgroundColor: '$gray800',
          border: '1px solid $gray600',
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          margin: '0 auto',
          maxWidth: 480,
        }}
      >
        <Text size="sm">Observações</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Digite observações adicionais',
  },
}
