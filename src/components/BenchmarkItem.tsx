import styled from 'styled-components'

interface BenchmarkItemProps {
  Name: string
}

interface ListItemBlockProps {
  Size: number
}

const ListItemWrapper = styled.div`
display:flex
`
const ListItemBlock = styled.div<ListItemBlockProps>`
flex: ${({Size})=> Size? Size:'1' }
`
export const BenchmarkItem = (props: BenchmarkItemProps) => {
  return (
    <ListItemWrapper>
      <ListItemBlock Size={2}>
        {({Name})=> Name ? Name : ''}
      </ListItemBlock>
      <ListItemBlock Size={1}>
        <button>Start benchmark</button>
      </ListItemBlock>
    </ListItemWrapper>
  )
}