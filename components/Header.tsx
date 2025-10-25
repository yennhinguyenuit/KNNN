import React from 'react';

const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8BAQEAAAACAgK3t7fAwMDf39/v7+8ODg76+vrk5OTX19eioqLLy8v39/eUlJTo6Oh6enrIyMhvb29OTk4/Pz9dXV1ISEgqKiozMzNtbW0dHR05OTlQUFAxMTEYGBhLS0sWFhZgYGCpqamJiYl33a5VAAADe0lEQVR4nO3dC3KiQBCF4dBAQRB81AVB8f+/so5Jk8xMSkpmDvo9705lHc5MqbOS2e4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC+K+ndg/QZ6aX0Y/pZ+kP6Ufpg+rH0dnpBerF1lT7Y3rf2m+n19Nf0s/TP9Dv0y6qP0kPpw1U/p3+kf01/Xv2e/jT9c/pD+rf0e+uv0t+kv6/+N/1D+t/00upf0f9Pf0/9afrf6S+r/0x/SP+c/j39S/ov6u/S36e/Sf9E/V36l/Rv1V+l/01/V/1H+sf0v+h/qP4t/Wf6N+rv0t+m/6/+Wf3z+k/0/+j/Xv2v9M/of6v+I/1b+u/qv6f/Tf+c/mv9x/RP6D+rv0l/V/2D+t/0j+t/qv5N/SP6j+o/pv9F/5L6t/Tf6V+r/0n/nf5D9e/pP9F/Vv+J/kf1D9X/pv9K/6n6V+m/03+q/lf6N/Tf1f9K/47+S/Uv6b/Tv1T/m/4t/Xf1v6f/TP+t+t/0v9K/qf5P/Uv63+uv0t+m/67+U/p39N/V/6X/Tv+t+g/1z+g/q/9K/53+Q/V/6F/Qf1f/h/579V/pf9O/V/+T/jf9j+rf0n+j/6z+J/3v6j+q/0v/if5L9R/pX9N/Vf+T/if9D9V/pX9O/6n6P/Qv6L+r/0//l/5b9X/pX9N/Vf+R/g39d/Vf6T/Tv1T/hf5b9Q/Vv6V/Uv1D+p/0P1T/lf5r9S/pv9O/Vf+F/if1D9W/pf9S/UP1T+m/1H9R/af6L+rf0v9W/ZP+O/kf1P9l+p/0P9Y/a/0z+g/rP5T+rf039V/p39L/6n6T+if0H9W/5f+O/2H6j+lf0L/Wf1v+pf039V/pX9K/6n6L/Tf6L+r/0P/nf5D9T/pf9D/WP27+u/0H6p/V/+R/i39d/W/6N/Qf1H9p/TP6T+q/0P/g/pP6b/Tv1b/lf4r/Uv1D+nf039X/4X+I/2H6t/Qf1b/g/5L9V/pf9G/Vv+b/jf9j+rf0n+l/6z+F/1v9R/Vf6f/TP9Z/Sf6D+rf0n+n/67+Wfrn9J/pP9P/ov6p/C39d/rX6p+n/0n/mv4r/VP6D+rf0v+gf0n/mv5r+pf0n9W/pP9I/5r+a/rn9M/V39J/pL+u/pP6V+rv0v+m/0b9Wfp79Pfq79FfpH9O/Z36u/RP6e+qP0d/n/6D+lv6h+pPpL+t/jn9ffVn6b/QP6f+Pfq39I9V39PfpP6m+g/0N+vfqL9Ff1d/k/6B+lv0r9Ufpb+mflP9Q/VX6J+pf0//gfqD9Ffq79HfU39Vfpf+ifqf9N/o36l+Sv2++g/09+kfqX+N/n/11+m/0z+g/kP9D/r31R+m/0T9XfoL9Xfpj9J/qn6r/CD9SfpT9L/oz6s/TP+B+if09+lv0f+if0j/gPpj9HfVn9O/pP5E/U/6H+hf0x+kv0H/kf4F/SX6j/Q31b+m/kT9E/o/1B+lv0r/hPrL9F/p/1L/qP5R+oP0b+i/U3+m/kT9AfoX9N/oP1F/qP5B/TP6B+g/pv5S/ZX6z+g/UX+g/jP9K/pn9K/pX9N/p39C/YX6y/QP6L/QP6D+Kv0T+s/o/1L/p/7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+zT8aJ2JmRkNw7AAAAABJRU5ErkJggg==';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-8 px-4">
      <img src={logoBase64} alt="Fact Check VN Logo" className="h-16 w-auto" />
      <div className="text-center sm:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
          Fact Check VN
        </h1>
        <p className="mt-2 sm:mt-1 text-lg text-gray-600">
          Kiểm tra tính xác thực của tin tức bằng Trí tuệ nhân tạo
        </p>
      </div>
    </header>
  );
};

export default Header;
