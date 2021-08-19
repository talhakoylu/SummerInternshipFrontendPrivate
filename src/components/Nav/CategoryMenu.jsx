import React from 'react'
import { Badge, Container } from 'react-bootstrap';

function Categories() {
    const CategoryItem = () => {
        return (
            <Badge bg="secondary" className="text-dark m-1 py-2">Kategori</Badge>
        )
    }

    return (
        <div className="bg-primary">
            <Container>
                <div className="d-flex py-2 pe-1">
                    <CategoryItem></CategoryItem>
                    <CategoryItem></CategoryItem>
                    <CategoryItem></CategoryItem>
                    <CategoryItem></CategoryItem>
                </div>
            </Container>
        </div>
    )
}

export default Categories