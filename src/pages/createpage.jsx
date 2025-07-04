import { Box, Flex } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button,
  Text,
  Heading,
  VStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState  } from 'react'
import { useProductStore } from '../store/product'
import { useToast } from '@chakra-ui/react'

const CreatePage = () => {

  const {createProduct} = useProductStore()
  const toast = useToast();
  const handleclick = async function(){
    const promise = createProduct(newProduct);

  const { success, message } = await promise;
  console.log({ success, message });

    
  if(!success && message == "Please fill in all fields!"){
    toast.promise(promise, {
    success: { status: "error", title: 'Creation failed', description: 'Please fill in all fields!' },
  });
  }
  else if(!success){
    toast.promise(promise, {
    success: { status: "error", title: 'Creation failed', description: 'Something went wrong' },
  });}
  else{
    toast.promise(promise, {
    success: { title: 'Product created', description: 'The product was added!' }
  });
  }
  }

  const categories = ['electronics', 'clothing', 'books', 'home', 'kitchen']
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    Image:"",
    description:"",
    category:"",
  });
  

  return (
    <>
    <Box maxW="600px" mx="auto" mt={10} px={4} rounded={"lg"} shadow={"md"} p={12} bg={bgColor}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Create New Product
      </Heading>

      <VStack spacing={4} align="stretch">
                <form action="">
            <FormControl isRequired>
              <FormLabel > provide a name for your product</FormLabel>
                <Input
                 type="text"
                  placeholder='Product name'
                  name='name'
                  onChange={(e) => setNewProduct((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }))
                  }></Input>
            </FormControl >
              <FormControl isRequired>
                <FormLabel> Provide a price for your product</FormLabel>
                  <Input type="Number"
                  name='price'
                  placeholder='product price'
                  onChange={(e) => setNewProduct((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }))
                  }></Input>
              </FormControl>
              <FormControl >
                <FormLabel> Provide a Description for your product
                  <Input type="text"
                  placeholder='description'
                  name='description'
                  onChange={(e) => setNewProduct((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }))
                  }></Input></FormLabel>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>provide a category to your product</FormLabel>
                  <Select placeholder='Select a category'
                  name='category'
                  onChange={(e) => setNewProduct((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }))
                  }>
                    {categories.map((category, index) =>{
                      return (<option key={index} value={category}>
                        {category}
                      </option>
                    )})}
                  </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel> Provide an image link for your product</FormLabel>
                  <Input type="text"
                  placeholder='Image URL'
                  name='image'
                  onChange={(e) => setNewProduct((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }))
                  }></Input>
              </FormControl>
              <br />
              <Flex align="center" gap={7}>
                <Button display="block"
                onClick={handleclick}>Create My Product</Button>
                <Link to="/">
                  <Text color="blue.500">Back</Text>
                </Link>
              </Flex>
        </form>
      </VStack>
    </Box>
 
  </>)
}

export default CreatePage
