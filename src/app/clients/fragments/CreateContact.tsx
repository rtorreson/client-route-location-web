import { Button, Input, Label } from '@/shared';
import { observer } from 'mobx-react-lite';
import { Fragment, useState } from 'react';
import Modal from 'react-modal';

import { useAddContactForm, useAddContactQuery } from '../hooks'

export const CreateContact = observer(() => {
    const [toogleModal, setToogleModal] = useState<boolean>(false);

    const { addContact } = useAddContactQuery();
    const { errors, handleSubmit, register, handleInputChange } = useAddContactForm(addContact);

    const switchToogleModal = () => {
        setToogleModal(!toogleModal);
    };

    return (
        <Fragment>
            <Button onClick={switchToogleModal} >Abrir modal</Button>
            <Modal isOpen={toogleModal} onRequestClose={switchToogleModal}>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '4vh' }}>
                    <Label $display="flex" $direction="column" $width='40%'>
                        Nome:
                        <Input type='text' {...register.name}></Input>
                    </Label>
                    <Label $display="flex" $direction="column" $width='40%'>
                        E-mail:
                        <Input type='text' {...register.email}></Input>
                    </Label>
                    <Label $display="flex" $direction="column" $width='40%'>
                        Celular:
                        <Input type='text' {...register.cellphone} onChange={handleInputChange}></Input>
                    </Label>
                    <Label $display="flex" $direction="column" $width='40%'>
                        Coordenada X:
                        <Input type='text' {...register.coordinates.x}></Input>
                    </Label>
                    <Label $display="flex" $direction="column" $width='40%'>
                        Coordenada Y:
                        <Input type='text' {...register.coordinates.y}></Input>
                    </Label>
                    <Button type='submit'>Salvar Cliente</Button>
                </form>

                {Object.keys(errors).length > 0 && (
                    <p style={{ color: 'red', marginTop: '2vh' }}>
                        {Object.keys(errors).map((fieldName) => (
                            //@ts-ignore
                            <span key={fieldName} style={{ marginTop: '1vh' }}>{errors[fieldName]?.message} <br /></span>
                        ))}
                    </p>
                )}

            </Modal>
        </Fragment>
    );
});
