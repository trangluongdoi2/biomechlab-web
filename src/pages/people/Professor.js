import React from 'react';
import imgProf from '../images/img-boss2.jpg';
import './People.css';
import img1 from '../images/img-1.jpg';
import imgProf1 from '../images/imgProf1.jpg';
import imgProf3 from '../images/imgProf3.jpg';
export default function Professor() {
  return (
    <>
      <img className="pageImg" src={imgProf1} />
      <h1 className="text-center textImg">PROFESSOR</h1>
      <div className="ProfessorBLock">
        <div className="Professor">
          <div className="imgProfDiv">
            <img className="imgProf" src={imgProf3} />
          </div>
          <div className="profInfor">
            <p>
              {' '}
              Dr. Seungchul Lee [CV] is an associate professor at the Department
              of Mechanical Engineering at Pohang University of Science and
              Technology (POSTECH), Korea. His research focuses on Industrial
              Artificial Intelligence for Mechanical Systems, Machine
              Healthcare, Smart Manufacturing, and Robotics. He extends his
              research work to both knowledge-guided AI and AI-driven knowledge
              discovery at POSTECH.
            </p>
            <p>
              <strong>Education</strong>
            </p>
            <div>
              <ul>
                <li>
                  2010 The University of Michigan at Ann Arbor, Ph.D. in
                  Mechanical Engineering
                </li>
                <li>
                  2008 The University of Michigan at Ann Arbor, M.S. in
                  Mechanical Engineering
                </li>
                <li>
                  2001 Seoul National University, B.S. in Mechanical and
                  Aerospace Engineering
                </li>
              </ul>
            </div>
            <p>
              <strong>Contact</strong>
            </p>
            <ul>
              <li>Bộ môn Cơ Điện tử - Khoa Cơ Khí</li>
              <li>
                Trung tâm nghiên cứu Thiết bị và Công nghệ Cơ khí Bách Khoa, Toà
                C3
              </li>
              <li>Trường Đại học Bách Khoa Thành phố Hồ Chí Minh</li>
              <li>
                268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
