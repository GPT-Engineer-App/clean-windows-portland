import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, Divider, Grid, GridItem, Container } from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaQuoteLeft } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmluZ3xlbnwwfHx8fDE3MTE5MjYwMTF8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" h="500px">
        <Box bgColor="rgba(0,0,0,0.6)" h="100%" color="white" py={20}>
          <VStack spacing={6} textAlign="center">
            <Heading as="h1" size="2xl">
              Crystal Clear Window Cleaning
            </Heading>
            <Text fontSize="xl">Professional window cleaning services in Portland, Maine</Text>
            <Button colorScheme="blue" size="lg">
              Get a Free Quote
            </Button>
          </VStack>
        </Box>
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={20}>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <GridItem>
            <Heading as="h2" size="xl" mb={4}>
              About Us
            </Heading>
            <Text fontSize="lg">Crystal Clear Window Cleaning has been providing top-notch window cleaning services to residential and commercial customers in Portland, Maine for over 10 years. Our experienced team uses the latest equipment and techniques to ensure your windows are spotless.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1421940943431-d392fcc1079f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmVyJTIwd29ya2luZ3xlbnwwfHx8fDE3MTE5MjYwMTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Window cleaner working" />
          </GridItem>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <VStack spacing={4} textAlign="center">
                <Image src="https://images.unsplash.com/photo-1484154218962-a197022b5858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHdpbmRvdyUyMGNsZWFuaW5nfGVufDB8fHx8MTcxMTkyNjAxMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Residential window cleaning" />
                <Heading as="h3" size="lg">
                  Residential
                </Heading>
                <Text>We offer interior and exterior window cleaning for homes of all sizes.</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} textAlign="center">
                <Image src="https://images.unsplash.com/photo-1553268107-a74f013ceb59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwd2luZG93JTIwY2xlYW5pbmd8ZW58MHx8fHwxNzExOTI2MDExfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Commercial window cleaning" />
                <Heading as="h3" size="lg">
                  Commercial
                </Heading>
                <Text>Our commercial services include high-rise buildings, storefronts, and more.</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} textAlign="center">
                <Image src="https://images.unsplash.com/photo-1592365559101-19adfefdf294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMHdhc2hpbmd8ZW58MHx8fHwxNzExOTI2MDEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Pressure washing" />
                <Heading as="h3" size="lg">
                  Pressure Washing
                </Heading>
                <Text>We also offer pressure washing for decks, patios, and exterior surfaces.</Text>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxW="container.lg" py={20}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          What Our Customers Say
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={6}>
              <FaQuoteLeft size={40} color="gray.300" />
              <Text mt={4} fontSize="lg">
                "Crystal Clear Window Cleaning did an amazing job on my home's windows. They were professional, efficient, and the results were outstanding. Highly recommend!"
              </Text>
              <Text fontWeight="bold" mt={4}>
                - John D.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth={1} borderRadius="lg" p={6}>
              <FaQuoteLeft size={40} color="gray.300" />
              <Text mt={4} fontSize="lg">
                "I've been using Crystal Clear for my business for years. They always do a great job and their prices are competitive. Wouldn't trust anyone else!"
              </Text>
              <Text fontWeight="bold" mt={4}>
                - Sarah K.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Contact Us
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <VStack spacing={4} textAlign="center">
                <FaPhone size={40} />
                <Heading as="h3" size="lg">
                  Phone
                </Heading>
                <Text>(207) 555-1234</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} textAlign="center">
                <FaMapMarkerAlt size={40} />
                <Heading as="h3" size="lg">
                  Address
                </Heading>
                <Text>123 Main St, Portland, ME 04101</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} textAlign="center">
                <FaClock size={40} />
                <Heading as="h3" size="lg">
                  Hours
                </Heading>
                <Text>Mon - Fri: 8am - 6pm</Text>
                <Text>Sat: 9am - 3pm</Text>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
