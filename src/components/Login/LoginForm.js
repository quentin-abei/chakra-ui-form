import { Box, Button, Flex, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <Box p={4} w="300px">
            <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <input type="email" id="email" placeholder="enter your email" />
            </FormControl>
            <FormControl mt={4}>
               <FormLabel htmlFor='password' >password</FormLabel>
               <input type="password" id="password" placeholder='Enter a password' />
            </FormControl>
            <Flex mt={4} justifyContent="space-between">
                <Button type='submit'>
                    Login
                </Button>
                <text fontSize="sm">Forgot your password</text>
            </Flex>
        </Box>
    </div>
  )
}

export default LoginForm