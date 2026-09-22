import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './FlightBookingForm.css';

const cities = ['Hà nội', 'Đà Nẵng', 'TP. Hồ Chí Minh', 'Nha Trang', 'Phú Quốc'];

function FlightBookingForm() {
  const [form, setForm] = useState({
    hoTen: '',
    diaChi: '',
    diTu: 'Hà nội',
    den: 'Hà nội',
    di: false,
    ve: false,
  });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const isValid = (value) => value.trim().length >= 5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid(form.hoTen) || !isValid(form.diaChi)) {
      setValidated(true);
      setSubmitted(false);
      return;
    }
    setValidated(false);
    setSubmitted(true);
  };

  return (
    <div className="container my-4 booking-form-wrapper">
      {showAlert && (
        <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
          Vui lòng điền đầy đủ thông tin để đặt vé.
        </Alert>
      )}
      <h1>Form đặt vé máy bay</h1>

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>👤</InputGroup.Text>
            <Form.Control
              name="hoTen"
              value={form.hoTen}
              onChange={handleChange}
              isInvalid={validated && !isValid(form.hoTen)}
              placeholder="Họ tên"
            />
            <InputGroup.Text>vnđ</InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Phải nhập 5 ký tự, in hoa....
            </Form.Control.Feedback>
          </InputGroup>
          {!validated && <Form.Text muted>Phải nhập 5 ký tự, in hoa....</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            name="diaChi"
            value={form.diaChi}
            onChange={handleChange}
            isInvalid={validated && !isValid(form.diaChi)}
          />
          <Form.Control.Feedback type="invalid">
            Phải nhập 5 ký tự, in hoa....
          </Form.Control.Feedback>
          {!validated && <Form.Text muted>Phải nhập 5 ký tự, in hoa....</Form.Text>}
        </Form.Group>

        <div className="row mb-3">
          <Form.Group className="col-md-6">
            <Form.Label>Đi từ</Form.Label>
            <Form.Select name="diTu" value={form.diTu} onChange={handleChange}>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>Đến</Form.Label>
            <Form.Select name="den" value={form.den} onChange={handleChange}>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Label className="d-block">Chọn chiều đi (Khứ hồi)</Form.Label>
          <Form.Check inline label="Đi" name="di" checked={form.di} onChange={handleChange} />
          <Form.Check inline label="Về" name="ve" checked={form.ve} onChange={handleChange} />
        </Form.Group>

        <Button type="submit" className="w-100" variant="primary">Đặt vé</Button>
      </Form>

      {submitted && (
        <Alert variant="success" className="mt-3">
          Đặt vé thành công cho <strong>{form.hoTen}</strong>: {form.diTu} → {form.den}
          {form.di && ' (chiều đi)'}{form.ve && ' (chiều về)'}
        </Alert>
      )}
    </div>
  );
}

export default FlightBookingForm;
